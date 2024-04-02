import { css } from 'styled-components'

export const BasicScale = css`
  &.scale-up-center {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-top {
    -webkit-animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-tr {
    -webkit-animation: scale-up-tr 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-tr 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-right {
    -webkit-animation: scale-up-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-br {
    -webkit-animation: scale-up-br 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-br 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-bottom {
    -webkit-animation: scale-up-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-bl {
    -webkit-animation: scale-up-bl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-bl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-left {
    -webkit-animation: scale-up-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-tl {
    -webkit-animation: scale-up-tl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-tl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-hor-center {
    -webkit-animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-hor-left {
    -webkit-animation: scale-up-hor-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-hor-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-hor-right {
    -webkit-animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-ver-center {
    -webkit-animation: scale-up-ver-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-ver-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-ver-top {
    -webkit-animation: scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &.scale-up-ver-bottom {
    -webkit-animation: scale-up-ver-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-ver-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  /**
     * ----------------------------------------
     * animation scale-up-ver-bottom
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-ver-bottom {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
  }
  @keyframes scale-up-ver-bottom {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-ver-top
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-ver-top {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
  @keyframes scale-up-ver-top {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-ver-center
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-ver-center {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
  @keyframes scale-up-ver-center {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-hor-right
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-hor-right {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
  }
  @keyframes scale-up-hor-right {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-hor-left
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  @keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-hor-center
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-hor-center {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  @keyframes scale-up-hor-center {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-tl
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-tl {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  @keyframes scale-up-tl {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-left
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-left {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
    }
  }
  @keyframes scale-up-left {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-bl
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-bl {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
  }
  @keyframes scale-up-bl {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-bottom
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-bottom {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
  }
  @keyframes scale-up-bottom {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-br
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-br {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
  }
  @keyframes scale-up-br {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-right
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-right {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }
  }
  @keyframes scale-up-right {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-tr
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-tr {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
  @keyframes scale-up-tr {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
  /**
     * ----------------------------------------
     * animation scale-up-top
     * ----------------------------------------
     */
  @-webkit-keyframes scale-up-top {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
    }
  }
  @keyframes scale-up-top {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
    }
  }
  /**
    * ----------------------------------------
    * animation scale-up-center
    * ----------------------------------------
    */
  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`
