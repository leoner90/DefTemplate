import { useSignUpMutation } from '../store/services.js'



function Home() {

    const [ServerCall, { isError, isLoading }] = useSignUpMutation();
    let x = JSON.stringify(234234234)
    return (
        <div>
             <button type="button" onClick ={() =>  {ServerCall(x)}}> Server Call </button>

            HOME
        </div>
    )
}

export default Home;