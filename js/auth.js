// ================================================================
// VENDEX — Customer Auth (login/signup modal + header state)
// Injected on every storefront page that includes this file
// ================================================================

(function() {

// Inject auth modal HTML
const modalHTML = `
<div id="auth-modal-overlay" style="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:1500;display:flex;align-items:center;justify-content:center;padding:1rem;opacity:0;visibility:hidden;transition:all 0.25s;">
  <div style="background:white;border-radius:12px;width:100%;max-width:420px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,0.2);transform:scale(0.95);transition:transform 0.25s;">
    <div style="display:flex;border-bottom:1px solid #f0f0f0;">
      <button id="auth-tab-login" class="auth-tab auth-tab-active" onclick="VendexAuth.switchTab('login')">Sign In</button>
      <button id="auth-tab-register" class="auth-tab" onclick="VendexAuth.switchTab('register')">Create Account</button>
    </div>
    <div style="padding:2rem;">
      <div id="auth-error" style="background:#fef2f2;border:1px solid #fecaca;color:#dc2626;padding:0.75rem 1rem;border-radius:6px;font-size:0.85rem;margin-bottom:1rem;display:none;"></div>
      <div id="auth-success" style="background:#f0fdf4;border:1px solid #bbf7d0;color:#16a34a;padding:0.75rem 1rem;border-radius:6px;font-size:0.85rem;margin-bottom:1rem;display:none;"></div>

      <!-- Login Form -->
      <div id="auth-login-form">
        <div style="margin-bottom:1rem;">
          <label style="display:block;font-size:0.78rem;font-weight:600;color:#374151;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.3px;">Email</label>
          <input id="auth-login-email" type="email" placeholder="your@email.com" style="width:100%;padding:0.75rem 0.875rem;border:1px solid #e5e7eb;border-radius:6px;font-family:inherit;font-size:0.9rem;outline:none;">
        </div>
        <div style="margin-bottom:1.5rem;">
          <label style="display:block;font-size:0.78rem;font-weight:600;color:#374151;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.3px;">Password</label>
          <input id="auth-login-password" type="password" placeholder="••••••••" style="width:100%;padding:0.75rem 0.875rem;border:1px solid #e5e7eb;border-radius:6px;font-family:inherit;font-size:0.9rem;outline:none;">
        </div>
        <button id="auth-login-btn" onclick="VendexAuth.login()" style="width:100%;padding:0.875rem;background:#111;color:white;border:none;border-radius:6px;font-family:inherit;font-size:0.9rem;font-weight:600;cursor:pointer;letter-spacing:0.5px;">Sign In</button>
      </div>

      <!-- Register Form -->
      <div id="auth-register-form" style="display:none;">
        <div style="margin-bottom:1rem;">
          <label style="display:block;font-size:0.78rem;font-weight:600;color:#374151;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.3px;">Full Name</label>
          <input id="auth-reg-name" type="text" placeholder="Your full name" style="width:100%;padding:0.75rem 0.875rem;border:1px solid #e5e7eb;border-radius:6px;font-family:inherit;font-size:0.9rem;outline:none;">
        </div>
        <div style="margin-bottom:1rem;">
          <label style="display:block;font-size:0.78rem;font-weight:600;color:#374151;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.3px;">Email</label>
          <input id="auth-reg-email" type="email" placeholder="your@email.com" style="width:100%;padding:0.75rem 0.875rem;border:1px solid #e5e7eb;border-radius:6px;font-family:inherit;font-size:0.9rem;outline:none;">
        </div>
        <div style="margin-bottom:1.5rem;">
          <label style="display:block;font-size:0.78rem;font-weight:600;color:#374151;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.3px;">Password</label>
          <input id="auth-reg-password" type="password" placeholder="Min. 6 characters" style="width:100%;padding:0.75rem 0.875rem;border:1px solid #e5e7eb;border-radius:6px;font-family:inherit;font-size:0.9rem;outline:none;">
        </div>
        <button id="auth-register-btn" onclick="VendexAuth.register()" style="width:100%;padding:0.875rem;background:#111;color:white;border:none;border-radius:6px;font-family:inherit;font-size:0.9rem;font-weight:600;cursor:pointer;letter-spacing:0.5px;">Create Account</button>
      </div>
    </div>
    <button onclick="VendexAuth.closeModal()" style="position:absolute;top:1rem;right:1rem;background:none;border:none;cursor:pointer;color:#9ca3af;font-size:1.25rem;line-height:1;">✕</button>
  </div>
</div>
<style>
.auth-tab { flex:1;padding:1rem;background:none;border:none;font-family:inherit;font-size:0.875rem;font-weight:500;cursor:pointer;color:#9ca3af;transition:all 0.2s; }
.auth-tab-active { color:#111;border-bottom:2px solid #111; }
#auth-modal-overlay.open { opacity:1;visibility:visible; }
#auth-modal-overlay.open > div { transform:scale(1); }
</style>`;
document.body.insertAdjacentHTML('beforeend', modalHTML);

// Header auth button injection
function updateHeaderAuth(user) {
    const actions = document.querySelector('.header-actions');
    if (!actions) return;
    let authBtn = document.getElementById('header-auth-btn');
    if (!authBtn) {
        authBtn = document.createElement('div');
        authBtn.id = 'header-auth-btn';
        actions.insertBefore(authBtn, actions.firstChild);
    }
    if (user) {
        const initial = (user.user_metadata?.full_name || user.email)[0].toUpperCase();
        authBtn.innerHTML = `
            <div style="position:relative;">
                <button id="user-menu-btn" style="width:34px;height:34px;border-radius:50%;background:#111;color:white;border:none;font-size:0.8rem;font-weight:700;cursor:pointer;">${initial}</button>
                <div id="user-menu" style="position:absolute;right:0;top:42px;background:white;border:1px solid #e5e7eb;border-radius:8px;min-width:170px;box-shadow:0 8px 24px rgba(0,0,0,0.12);z-index:500;display:none;overflow:hidden;">
                    <div style="padding:0.875rem 1rem;border-bottom:1px solid #f0f0f0;font-size:0.8rem;color:#6b7280;">${user.email}</div>
                    <a href="account.html" style="display:block;padding:0.75rem 1rem;font-size:0.875rem;color:#111;text-decoration:none;">My Orders</a>
                    <button onclick="VendexAuth.logout()" style="width:100%;padding:0.75rem 1rem;text-align:left;background:none;border:none;font-family:inherit;font-size:0.875rem;color:#ef4444;cursor:pointer;">Sign Out</button>
                </div>
            </div>`;
        document.getElementById('user-menu-btn')?.addEventListener('click', e => {
            e.stopPropagation();
            const menu = document.getElementById('user-menu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', () => { const m = document.getElementById('user-menu'); if(m) m.style.display='none'; });
    } else {
        authBtn.innerHTML = `<button onclick="VendexAuth.openModal()" style="background:none;border:1px solid #e5e7eb;font-family:inherit;font-size:0.82rem;padding:0.4rem 0.875rem;border-radius:4px;cursor:pointer;font-weight:500;">Sign In</button>`;
    }
}

// Public API
window.VendexAuth = {
    openModal() { document.getElementById('auth-modal-overlay').classList.add('open'); },
    closeModal() { document.getElementById('auth-modal-overlay').classList.remove('open'); this.clearMessages(); },
    switchTab(tab) {
        const isLogin = tab === 'login';
        document.getElementById('auth-login-form').style.display = isLogin ? '' : 'none';
        document.getElementById('auth-register-form').style.display = isLogin ? 'none' : '';
        document.getElementById('auth-tab-login').className = 'auth-tab' + (isLogin ? ' auth-tab-active' : '');
        document.getElementById('auth-tab-register').className = 'auth-tab' + (!isLogin ? ' auth-tab-active' : '');
        this.clearMessages();
    },
    showError(msg) {
        const el = document.getElementById('auth-error'); el.textContent = msg; el.style.display = 'block';
        document.getElementById('auth-success').style.display = 'none';
    },
    showSuccess(msg) {
        const el = document.getElementById('auth-success'); el.textContent = msg; el.style.display = 'block';
        document.getElementById('auth-error').style.display = 'none';
    },
    clearMessages() {
        document.getElementById('auth-error').style.display = 'none';
        document.getElementById('auth-success').style.display = 'none';
    },
    async login() {
        const email = document.getElementById('auth-login-email').value.trim();
        const pass  = document.getElementById('auth-login-password').value;
        if (!email || !pass) { this.showError('Please enter your email and password'); return; }
        const btn = document.getElementById('auth-login-btn');
        btn.textContent = 'Signing in...'; btn.disabled = true;
        const res = await VendexDB.signIn(email, pass);
        btn.textContent = 'Sign In'; btn.disabled = false;
        if (res.success) { this.closeModal(); updateHeaderAuth(res.user); }
        else this.showError(res.error || 'Sign in failed. Check your credentials.');
    },
    async register() {
        const name  = document.getElementById('auth-reg-name').value.trim();
        const email = document.getElementById('auth-reg-email').value.trim();
        const pass  = document.getElementById('auth-reg-password').value;
        if (!name || !email || !pass) { this.showError('Please fill in all fields'); return; }
        if (pass.length < 6) { this.showError('Password must be at least 6 characters'); return; }
        const btn = document.getElementById('auth-register-btn');
        btn.textContent = 'Creating account...'; btn.disabled = true;
        const res = await VendexDB.signUp(email, pass, name);
        btn.textContent = 'Create Account'; btn.disabled = false;
        if (res.success) {
            this.showSuccess('Account created! Please check your email to confirm, then sign in.');
            setTimeout(() => this.switchTab('login'), 2000);
        } else this.showError(res.error || 'Registration failed. Please try again.');
    },
    async logout() { await VendexDB.signOut(); updateHeaderAuth(null); window.location.reload(); }
};

// Check session on load
VendexDB.onAuthChange((event, session) => {
    updateHeaderAuth(session?.user || null);
});
(async () => {
    const user = await VendexDB.getUser();
    updateHeaderAuth(user);
})();

// Close on overlay click
document.getElementById('auth-modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) VendexAuth.closeModal();
});

})();
