<template>
  <div>
    <el-button type="primary">测试按钮</el-button>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import './index.scss';

export default {
  name: 'GtButton',
  components: {
    "el-button": Button
  },
  props: {
  }
}
</script>

<style>
</style>
