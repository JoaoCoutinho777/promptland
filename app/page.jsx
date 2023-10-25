import Feed from '@components/Feed';
import BackgroundAnimation from '@components/BackgroundAnimatrion';
import FollowBar from '@components/FollowBar';

const Home = ({post}) => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        <span className="blue_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Discover, Create and Share creative prompts
      </p>
      <div className="absolute -right-28 top-1/4">
        <FollowBar />
      </div>
      
      <Feed />
    </section>
  )
}

export default Home