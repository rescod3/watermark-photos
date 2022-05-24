import Link from "next/link";

export default function PrimaryButton(props){

    const ButtonComponent = () => (
        <button
            className={`primaryButton ${props.className ?? ''} ${props.disabled ? '-disabled' : ''}`}
            onClick={props.onClick ?? null}
            disabled={!!props.disabled ?? false}
        >
            {props.label ?? props.children}
        </button>
    )

    if(props.href){
        return (
            <Link href={props.href}>
                <ButtonComponent/>
            </Link>
        )
    } else {
        return <ButtonComponent/>
    }
}