export default [
  { name: 'cols', desc: '列信息', type: 'Array', values: '-', default: `` },
  { name: 'query-model', desc: '查询条件模型', type: 'Object', values: '-', default: '-' },
  { name: 'query-method', desc: '查询方法', type: 'Function', values: '-', default: '-' },
  { name: 'title', desc: '标题', type: 'String', values: '-', default: '-' },
  { name: 'icon', desc: '标题左侧图标', type: 'String', values: '-', default: '-' },
  { name: 'icon-color', desc: '标题左侧图标的颜色', type: 'String', values: '-', default: '-' },
  { name: 'width', desc: '宽度，仅支持px或者百分比%的格式', type: 'String', values: '-', default: '100%' },
  { name: 'height', desc: '高度，仅支持px或者百分比%的格式', type: 'String', values: '-', default: '自适应' },
  { name: 'size', desc: '尺寸', type: 'String', values: '-', default: '-' },
  {
    name: 'pagination',
    desc: '分页配置',
    type: 'Object',
    values: '-',
    default: `{
  small: false,
  background: true,
  pageSizes: [10, 15, 30, 50, 100],
  layout: 'total, sizes, prev, pager, next, jumper',
}`,
  },
  { name: 'multiple', desc: '多选', type: 'Boolean', values: '-', default: 'false' },
  { name: 'search-btn-text', desc: '搜索按钮文本', type: 'String', values: '-', default: '搜索' },
  { name: 'reset-btn-text', desc: '重置按钮文本', type: 'String', values: '-', default: '重置' },
  { name: 'loading-text', desc: '加载动画文本', type: 'String', values: '-', default: '-' },
  { name: 'loading-background', desc: '加载动画背景色', type: 'String', values: '-', default: '-' },
  { name: 'loading-spinner', desc: '加载动画图标', type: 'String', values: '-', default: '-' },
  { name: 'no-refresh', desc: '不显示刷新按钮', type: 'Boolean', values: '-', default: 'false' },
  { name: 'no-fullscreen', desc: '不显示全屏按钮', type: 'Boolean', values: '-', default: 'false' },
  { name: 'no-padding', desc: '不包含内边距', type: 'Boolean', values: '-', default: 'false' },
  { name: 'no-querybar', desc: '不显示查询栏', type: 'Boolean', values: '-', default: 'false' },
  { name: 'index', desc: '显示索引', type: 'Boolean', values: '-', default: 'true' },
  { name: 'index-method', desc: '自定义索引计算方法', type: 'Function', values: '-', default: '-' },
  { name: 'disable-set-column', desc: '禁用设置列功能', type: 'Boolean', values: '-', default: 'false' },
  { name: 'row-key', desc: '行数据的 Key，同ElementPlus中表格的row-key', type: 'String', values: '-', default: 'id' },
  { name: 'empty-text', desc: '空数据时显示的文本内容', type: 'String', values: '-', default: '-' },
  { name: 'show-summary', desc: '是否在表尾显示合计行', type: 'Boolean', values: '-', default: 'false' },
  { name: 'sum-text', desc: '合计行第一列的文本', type: 'String', values: '-', default: '-' },
  { name: 'summary-method', desc: '自定义的合计计算方法', type: 'Function', values: '-', default: '-' },
  { name: 'span-method', desc: '合并行或列的计算方法', type: 'Function', values: '-', default: '-' },
  { name: 'default-expand-all', desc: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效', type: 'Boolean', values: '-', default: '-' },
  { name: 'expand-row-keys', desc: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组', type: 'Array', values: '-', default: '-' },
  { name: 'tooltip-effect', desc: 'tooltip effect 属性', type: 'String', values: '-', default: '-' },
  { name: 'indent', desc: '展示树形数据时，树节点的缩进', type: 'Number', values: '-', default: '16' },
  { name: 'lazy', desc: '是否懒加载子节点数据', type: 'Boolean', values: '-', default: '-' },
  { name: 'load', desc: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息', type: 'Function', values: '-', default: '-' },
  { name: 'tree-props', desc: '渲染嵌套数据的配置选项', type: 'Object', values: '-', default: `{ hasChildren: 'hasChildren', children: 'children' }` },
]
