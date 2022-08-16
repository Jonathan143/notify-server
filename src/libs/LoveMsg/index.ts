/**
 * @name loveMsg
 * @description 入口
 */
import dotenv from 'dotenv'
import dayjs from 'dayjs'
import { goodMorning } from './goodMorning'
import { goodAfternoon } from './goodAfternoon'
import { goodEvening } from './goodEvening'
dotenv.config()

export default function main() {
  const nowHour = dayjs().hour()
  if (nowHour < 12) {
    // 早安
    goodMorning()
  } else if (nowHour < 18) {
    // 午安
    goodAfternoon()
  } else {
    goodEvening()
  }
}
