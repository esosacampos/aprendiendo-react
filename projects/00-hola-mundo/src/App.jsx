import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className='App'>jjj
                <TwitterFollowCard formatUserName={format} userName="midudev" name="Elsa Sosa" initialIsFollowing />
                <TwitterFollowCard formatUserName={format} userName="pheralb" name="Pablo Hernandez" initialIsFollowing={false}/>
                <TwitterFollowCard formatUserName={format} userName="elonmusk" name="Elon Musk" initialIsFollowing/>
                <TwitterFollowCard formatUserName={format} userName="pedromichel" name="Vandert" initialIsFollowing={false}/>            
        </section>
    )
}