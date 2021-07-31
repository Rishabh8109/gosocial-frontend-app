import Head from 'next/head'
import Image from 'next/image'
import Posts from '../component/Posts'
import Stories from '../component/Stories'
import UploadPost from '../component/UploadPost'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <UploadPost />
      <Stories />
      <Posts />
      <Posts />
    </div>
  )
}
