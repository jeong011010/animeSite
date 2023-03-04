
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <div className={styles.NavBody}>
      <div className={styles.SideNav}>
        <div className={styles.Title}>
          <a href="/">
            <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.TitleStyle}>
              <path fillRule="evenodd" clipRule="evenodd" d="M40.099 7.252h-1.652a1.554 1.554 0 01-1.562-1.572v-.308c0-.866.697-1.572 1.562-1.572h6.735c.856 0 1.562.706 1.562 1.572v.308c0 .866-.696 1.572-1.562 1.572h-1.651v11.182c0 .865-.697 1.572-1.562 1.572h-.309a1.573 1.573 0 01-1.561-1.572V7.252zM10.652 20.006H8.215c-2.686 0-4.885-2.209-4.885-4.905v-9.72c0-.865.696-1.57 1.572-1.57H5.2c.866 0 1.562.705 1.562 1.57v9.72c0 .796.647 1.453 1.453 1.453h2.437c.865 0 1.562.706 1.562 1.572v.308c0 .865-.697 1.572-1.562 1.572zm38.927-.03c.1.02.21.03.319.03h6.317c.865 0 1.562-.707 1.562-1.572v-.299c0-.865-.707-1.571-1.562-1.571h-4.447v-2.925h3.452c.866 0 1.562-.707 1.562-1.572v-.298c0-.866-.706-1.572-1.562-1.572h-3.452V7.252h4.447c.865 0 1.562-.706 1.562-1.572v-.308c0-.866-.707-1.572-1.562-1.572h-6.317c-.866 0-1.572.706-1.572 1.572v13.062c0 .756.537 1.393 1.253 1.542zM18.88 7.272c-.716.11-1.224.756-1.224 1.482v3.552h2.905V8.715c0-.876-.786-1.582-1.68-1.443zm-2.785 12.734h-.309a1.575 1.575 0 01-1.572-1.572v-9.62c0-2.577 1.94-4.785 4.497-4.984 2.865-.229 5.282 2.06 5.282 4.885v9.719c0 .865-.696 1.572-1.561 1.572h-.309a1.567 1.567 0 01-1.562-1.572v-2.686h-2.905v2.686c0 .865-.696 1.572-1.561 1.572zm15.21-12.754h2.428c.865 0 1.562-.706 1.562-1.572v-.308c0-.866-.697-1.572-1.562-1.572h-2.438c-2.686 0-4.884 2.209-4.884 4.905v9.719c0 .865.696 1.572 1.562 1.572h.298c.866 0 1.562-.707 1.562-1.572v-4.357h3.89c.865 0 1.562-.707 1.562-1.572v-.299c0-.865-.697-1.572-1.562-1.572h-3.89v-1.91c.02-.805.677-1.462 1.472-1.462zm35.794 12.754h-2.437c-2.686 0-4.885-2.209-4.875-4.905v-9.72c0-.865.697-1.571 1.562-1.571h.308c.856 0 1.562.706 1.562 1.572v9.72a1.46 1.46 0 001.453 1.452h2.427c.856 0 1.562.706 1.562 1.572v.308c0 .865-.696 1.572-1.562 1.572z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
        <div className={styles.SideMenu}>
          <a href="/finder">태그검색</a>
          <a href="/daily">요일별 신작</a>
          <a href="/themes">테마추천</a>
          <a href="/membership">멤버십</a>
        </div>
        <div className={styles.d}>
          <div className={styles.d}>
            <div className={styles.d}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.222 16.657a7.608 7.608 0 111.435-1.435l4.05 4.05a1 1 0 010 1.415l-.02.02a1 1 0 01-1.415 0l-4.05-4.05zm.994-6.05a5.608 5.608 0 11-11.216 0 5.608 5.608 0 0111.216 0z" fill="currentColor"></path>
              </svg>
              <div className={styles.d}>
                <input data-cy="search-input" placeholder="제목, 제작사, 감독으로 검색 (초성)" className={styles.d} />
              </div>
            </div>
            <div data-cy="search-icon" className={styles.d}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.222 16.657a7.608 7.608 0 111.435-1.435l4.05 4.05a1 1 0 010 1.415l-.02.02a1 1 0 01-1.415 0l-4.05-4.05zm.994-6.05a5.608 5.608 0 11-11.216 0 5.608 5.608 0 0111.216 0z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          <a data-cy="login-button" className={styles.d} href="/auth/login?next=/">로그인/가입</a>
        </div>
      </div>
      <div className={styles.d}>
        <div className={styles.d}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.d}>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.222 16.657a7.608 7.608 0 111.435-1.435l4.05 4.05a1 1 0 010 1.415l-.02.02a1 1 0 01-1.415 0l-4.05-4.05zm.994-6.05a5.608 5.608 0 11-11.216 0 5.608 5.608 0 0111.216 0z" fill="currentColor"></path>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.d}>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            </path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
