import Taro, { Component } from '@tarojs/taro'
import { View, Navigator } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  render () {
    return (
      <View className='posts-wrapper'>
        <Navigator openType="navigate" url='/pages/posts/show/index?id=1'>
          第一篇博文
        </Navigator>
        <Navigator openType="navigate" url='/pages/posts/show/index?id=2'>
          第二篇博文
        </Navigator>
        <Navigator openType="navigate" url='/pages/posts/show/index?id=3'>
          第三篇博文
        </Navigator>
      </View>
    )
  }
}

