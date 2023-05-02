import { useSignUpMutation } from '../store/services.js'



function Home() {

    const [logoutTrigger, { isError, isLoading }] = useSignUpMutation()

    const handleLogout = () => {
        logoutTrigger()
      }


    return (
        <div>
             <button type="button" onClick= {handleLogout}> Server Call </button>

            HOME
        </div>
    )
}

export default Home;