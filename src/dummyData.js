import { v4 as uuidv4 } from "uuid"

const dummyData = [
  {
    id: uuidv4(),
    title: "今からやること",
    tasks: [
      {
        id: uuidv4(),
        title: "Reactの勉強"
      },
      {
        id: uuidv4(),
        title: "flutterの勉強"
      },
      {
        id: uuidv4(),
        title: "pythonの勉強"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "休日にやること",
    tasks: [
      {
        id: uuidv4(),
        title: "釣り"
      },
      {
        id: uuidv4(),
        title: "プログラミング"
      },
      {
        id: uuidv4(),
        title: "睡眠"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "未来にやること",
    tasks: [
      {
        id: uuidv4(),
        title: "転職活動"
      },
      {
        id: uuidv4(),
        title: "ポートフォリオ作成"
      },
      {
        id: uuidv4(),
        title: "投資"
      }
    ]
  }
]

export default dummyData;