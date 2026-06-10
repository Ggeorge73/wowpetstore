/* ============================================
   My Wow Pet — Production Auth Guard
   Blocks mock authentication from being mistaken for real auth in production.
   ============================================ */

(function () {
  const host = window.location.hostname;
  const params = new URLSearchParams(window.location.search);
  const explicitDevMode = params.get('devAuth') === 'true';
  const isLocalHost = host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');
  const isProductionLike = !isLocalHost && !explicitDevMode;

  window.WOWPET_SECURITY = Object.freeze({
    isProductionLike,
    allowMockAuth: !isProductionLike
  });

  window.WowPetAuthUnavailable = function showAuthUnavailable() {
    const message = 'Account service is temporarily unavailable. Please continue as a guest or try again later.';
    if (window.WowApp && typeof window.WowApp.showToast === 'function') {
      window.WowApp.showToast(message, '🔒', 5000);
    } else {
      console.warn('[My Wow Pet] ' + message);
    }
  };
})();
