import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    // Optional: handle the case where user is not found
    if (!user) {
        return <p>User not found.</p>; // or redirect / show login
    }

    return (
        <>
            <h3>Interview generation</h3>

            <Agent
                userName={user.name}
                userId={user.id}
                type="generate"
            />
        </>
    );
};

export default Page;
