type UserCardProps = {
    name: string;
    age: number;
    email:string;
}

export function UserCard({name, age, email}: UserCardProps) {
    return (
        <div className="p-2 border border-gray-300 rounded-md w-50">
            <div className="font-bold">{name}</div> 
            <div className="text-sm">age: {age}</div> 
            <div className="text-sm">Email: {email}</div> 
        </div>
    )
}
