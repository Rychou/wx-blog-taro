import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
export default class Show extends Component{
  state = {
    postIndex: 0,
    posts: [
      {
        title: '第1篇日志',
        content: '这里是我的第1篇日志的内容'
      },
      {
        title: '第2篇日志',
        content: '这里是我的第2篇日志的内容'
      },
      {
        title: '第3篇日志',
        content: '这里是我的第3篇日志的内容'
      }
    ]
  }

  componentWillMount(){
    // wxml中路由参数从onLoad(e){}生命周期中获取
    // Taro中的路由参数则在this.$router.params对象中
    this.setState({
      postIndex: this.$router.params.id - 1
    })
  }
  render(){
    const { postIndex, posts } = this.state
    return(
      <View className='show-wrapper'>
        <View className='post-title'>
          { posts[postIndex].title }
        </View>
        <View className="post-content">
          { posts[postIndex].content }
        </View>
      </View>
    )
  }
}