"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'


interface IPostAvatarProps {
    src?: string
    fallback: string

}

const PostAvatar = ({ src, fallback }: IPostAvatarProps) => {
    return (
        <Avatar>
            <AvatarImage src={src} className='rounded-full' />
            <AvatarFallback >{fallback}</AvatarFallback>
        </Avatar>
    )
}

export default PostAvatar