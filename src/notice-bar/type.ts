/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdNoticeBarProps {
  /**
   * 背景色
   * @default ''
   */
  bgColor?: string;
  /**
   * 文本颜色
   * @default ''
   */
  color?: string;
  /**
   * 文本内容
   * @default ''
   */
  content?: string;
  /**
   * 延迟显示，单位：毫秒
   * @default 0
   */
  delay?: number;
  /**
   * 详情
   * @default ''
   */
  detailText?: string;
  /**
   * 详情颜色
   * @default ''
   */
  detailTextColor?: string;
  /**
   * 图标颜色
   * @default ''
   */
  iconColor?: string;
  /**
   * 左边图标
   */
  leftIcon?: TNode;
  /**
   * 模式
   */
  mode?: 'link' | 'closeable';
  /**
   * 左边图标
   */
  rightIcon?: TNode;
  /**
   * 是否需要滚动
   */
  scrollable?: boolean;
  /**
   * 滚动速度
   * @default 50
   */
  speed?: number;
  /**
   * 点击事件
   */
  onClick?: () => void;
  /**
   * 关闭
   */
  onClose?: () => void;
  /**
   * 详情点击
   */
  onDetail?: () => void;
}
