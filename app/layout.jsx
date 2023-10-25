import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import BackgroundAnimation from '@components/BackgroundAnimatrion';

export const metadata = {
    title: "Promptland",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
          </Provider>
        </body>
    </html>
    
  )
}

export default RootLayout