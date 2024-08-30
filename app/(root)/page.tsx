import TotalBalanceBox from "@/components/TotalBalanceBox"
import HeaderBox from "@/components/HeaderBox"

const Home = () => {
  const loggedIn = {firstName: 'Gurveen'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Acess and manage your account and transactions."
          />

          <TotalBalanceBox  
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1200.50}>

          </TotalBalanceBox>

        </header>
      </div>
    </section>
  )
}

export default Home