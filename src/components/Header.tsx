const Header = () => {
  return <header className="calc-header">
      <div className="calc-header__content">
        <img src="/logo-dosefy.png" alt="Logo Dosefy" className="calc-header__logo" onError={e => {
        // Fallback to a gradient circle with initial
        e.currentTarget.style.display = 'none';
        const parent = e.currentTarget.parentElement;
        if (parent) {
          const fallback = document.createElement('div');
          fallback.className = 'calc-header__logo-fallback';
          fallback.textContent = 'D';
          parent.insertBefore(fallback, e.currentTarget);
        }
      }} />

        <div className="calc-header__text">
          <span className="calc-header__title">CHILD-PUGH Escore - Cirrose</span>
          <span className="calc-header__subtitle">Selecione abaixo para calcular automaticamente o escore</span>
        </div>
      </div>
    </header>;
};
export default Header;