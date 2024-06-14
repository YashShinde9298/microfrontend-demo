import dynamic from "next/dynamic"
import Link from "next/link";

const ReactComponent = dynamic(() => import('../../../react-app/src/components/ReactComponent.js'));

export default function IndexPage() {
    return (<>
        <ReactComponent />
        <Link
            className="text-blue-700 underline"
            href={'/'}
        >Back to Home</Link>
    </>)
}