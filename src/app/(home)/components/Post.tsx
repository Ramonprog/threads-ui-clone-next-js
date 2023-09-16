import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DialogPost from "./Dialog"
import { Button } from "@/components/ui/button"


export default function Post() {
    return (
        <div className="flex justify-between mx-3 items-center gap-3">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <DialogPost />

            <Button disabled variant='outline' className="rounded-xl bg-transparent text-threads-text-default ">POST</Button>
        </div>
    )
}