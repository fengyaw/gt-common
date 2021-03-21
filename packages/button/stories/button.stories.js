import GtButton from '../src/button.vue'

export default {
  title: 'GtButton',
  component: GtButton
}

export const Button = _ => ({
  components: { GtButton },
  template: `
    <div>
      <gt-button></gt-button>
    </div>
  `,
  parameters: { 
    docs: { 
      page: "这是测试Button哈哈哈" 
    } 
  },
})