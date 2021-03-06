export default [
  { name: 'select', desc: '当用户手动勾选数据行的 Checkbox 时触发的事件', params: 'selection, row' },
  { name: 'select-all', desc: '当用户手动勾选全选 Checkbox 时触发的事件', params: 'selection' },
  { name: 'selection-change', desc: '当选择项发生变化时会触发该事件', params: 'selection' },
  { name: 'cell-mouse-enter', desc: '当单元格 hover 进入时会触发该事件', params: 'row, column, cell, event' },
  { name: 'cell-mouse-leave', desc: '当单元格 hover 退出时会触发该事件', params: 'row, column, cell, event' },
  { name: 'cell-click', desc: '当某个单元格被点击时会触发该事件', params: 'row, column, cell, event' },
  { name: 'cell-dblclick', desc: '当某个单元格被双击击时会触发该事件', params: 'row, column, cell, event' },
  { name: 'row-click', desc: '当某一行被点击时会触发该事件', params: 'row, column, event' },
  { name: 'row-contextmenu', desc: '当某一行被鼠标右键点击时会触发该事件', params: 'row, column, event' },
  { name: 'row-dblclick', desc: '当某一行被双击时会触发该事件', params: 'row, column, event' },
  { name: 'header-click', desc: '当某一列的表头被点击时会触发该事件', params: 'column, event' },
  { name: 'header-contextmenu', desc: '当某一列的表头被鼠标右键点击时触发该事件', params: 'column, event' },
  { name: 'sort-change', desc: '当表格的排序条件发生变化的时候会触发该事件(注意参数是一个对象，不是三个)', params: '{ column, prop, order }' },
  { name: 'current-change', desc: '当表格的当前行发生变化的时候会触发该事件', params: 'currentRow, oldCurrentRow' },
  { name: 'header-dragend', desc: '当拖动表头改变了列的宽度的时候会触发该事件', params: 'newWidth, oldWidth, column, event' },
  { name: 'expand-change', desc: '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）', params: 'row, (expandedRows | expanded)' },
  { name: 'query', desc: '查询成功触发该事件', params: '接口返回的数据' },
  { name: 'reset', desc: '重置事件', params: '-' },
]
