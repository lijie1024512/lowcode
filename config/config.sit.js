import { defineConfig } from 'umi';
import {functions} from '../function.js'
const {UMI_ENV}=process.env
export default defineConfig({
  define:{
    'process.env.UMI_ENV':UMI_ENV,
    "process.env.name": '自定义name',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  history: {
    type: 'hash'
  },
  // routes: [
  //   {
  //     path: '/',
  //     redirect: '/xflow',
  //   },
  //   {
  //     name: '流程可视化',
  //     path: '/xflow',
  //     icon: 'SmileOutlined',
  //     component: '@/pages/xflow',
  //   },
  //   {
  //     name: '表单模板',
  //     path: '/playground',
  //     icon: 'FormOutlined',
  //     component: '@/pages/playground',
  //   },
  //   {
  //     name: '表单设计',
  //     path: '/playground/details',
  //     component: '@/pages/playground/details',
  //     headerRender: false,
  //     footerRender: false,
  //     menuRender: false,
  //     hideInMenu: true,
  //   },
  //   {
  //     name: 'example',
  //     path: '/example',
  //     component: '@/pages/example/index.js',
  //     headerRender: false,
  //     footerRender: false,
  //     menuRender: false,
  //     hideInMenu: true,
  //   }
  // ],
  // 如果有子路由 或者二级路由 
  routes:functions.map(item=>({
      headerRender: false,
      footerRender: false,
      menuRender: false,
      hideInMenu: true,
      // name:'bdap3.0',
    name:item.name,
    path:'/'+item.code,component:`@/pages/`+item.route})),
  publicPath:  '/',
  hash: true,
  mfsu: {},
  fastRefresh: {},
  dynamicImport:{}
});
