import { css } from 'styled-components'

export const BasicSlide = css`
  &.slide-top {
    -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-tr {
    -webkit-animation: slide-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-right {
    -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-br {
    -webkit-animation: slide-br 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-br 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-bottom {
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-bl {
    -webkit-animation: slide-bl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-bl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-left {
    -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-tl {
    -webkit-animation: slide-tl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-tl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-bck-center {
    -webkit-animation: slide-bck-center 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    animation: slide-bck-center 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  &.slide-bck-top {
    -webkit-animation: slide-bck-top 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    animation: slide-bck-top 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  &.slide-bck-tr {
    -webkit-animation: slide-bck-tr 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    animation: slide-bck-tr 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  &.slide-bck-right {
    -webkit-animation: slide-bck-right 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    animation: slide-bck-right 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  &.slide-bck-br {
    -webkit-animation: slide-bck-br 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    animation: slide-bck-br 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  &.slide-bck-bottom {
    -webkit-animation: slide-bck-bottom 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    animation: slide-bck-bottom 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  &.slide-bck-bl {
    -webkit-animation: slide-bck-bl 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    animation: slide-bck-bl 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  &.slide-bck-left {
    -webkit-animation: slide-bck-left 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    animation: slide-bck-left 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  &.slide-bck-tl {
    -webkit-animation: slide-bck-tl 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    animation: slide-bck-tl 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  &.slide-fwd-center {
    -webkit-animation: slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-fwd-top {
    -webkit-animation: slide-fwd-top 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-fwd-top 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-fwd-tr {
    -webkit-animation: slide-fwd-tr 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-fwd-tr 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-fwd-right {
    -webkit-animation: slide-fwd-right 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-fwd-right 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-fwd-br {
    -webkit-animation: slide-fwd-br 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-fwd-br 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-fwd-bottom {
    -webkit-animation: slide-fwd-bottom 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-fwd-bottom 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-fwd-bl {
    -webkit-animation: slide-fwd-bl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-fwd-bl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-fwd-left {
    -webkit-animation: slide-fwd-left 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-fwd-left 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.slide-fwd-tl {
    -webkit-animation: slide-fwd-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-fwd-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  /**
 * ----------------------------------------
 * animation slide-fwd-tl
 * ----------------------------------------
 */
  @-webkit-keyframes slide-fwd-tl {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(-100px) translateX(-100px);
      transform: translateZ(160px) translateY(-100px) translateX(-100px);
    }
  }
  @keyframes slide-fwd-tl {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(-100px) translateX(-100px);
      transform: translateZ(160px) translateY(-100px) translateX(-100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-fwd-left
 * ----------------------------------------
 */
  @-webkit-keyframes slide-fwd-left {
    0% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateX(-100px);
      transform: translateZ(160px) translateX(-100px);
    }
  }
  @keyframes slide-fwd-left {
    0% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateX(-100px);
      transform: translateZ(160px) translateX(-100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-fwd-bl
 * ----------------------------------------
 */
  @-webkit-keyframes slide-fwd-bl {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(100px) translateX(-100px);
      transform: translateZ(160px) translateY(100px) translateX(-100px);
    }
  }
  @keyframes slide-fwd-bl {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(100px) translateX(-100px);
      transform: translateZ(160px) translateY(100px) translateX(-100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-fwd-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes slide-fwd-bottom {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(100px);
      transform: translateZ(160px) translateY(100px);
    }
  }
  @keyframes slide-fwd-bottom {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(100px);
      transform: translateZ(160px) translateY(100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-fwd-br
 * ----------------------------------------
 */
  @-webkit-keyframes slide-fwd-br {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(100px) translateX(100px);
      transform: translateZ(160px) translateY(100px) translateX(100px);
    }
  }
  @keyframes slide-fwd-br {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(100px) translateX(100px);
      transform: translateZ(160px) translateY(100px) translateX(100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-fwd-right
 * ----------------------------------------
 */
  @-webkit-keyframes slide-fwd-right {
    0% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateX(100px);
      transform: translateZ(160px) translateX(100px);
    }
  }
  @keyframes slide-fwd-right {
    0% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateX(100px);
      transform: translateZ(160px) translateX(100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-fwd-tr
 * ----------------------------------------
 */
  @-webkit-keyframes slide-fwd-tr {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(-100px) translateX(100px);
      transform: translateZ(160px) translateY(-100px) translateX(100px);
    }
  }
  @keyframes slide-fwd-tr {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(-100px) translateX(100px);
      transform: translateZ(160px) translateY(-100px) translateX(100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-fwd-top
 * ----------------------------------------
 */
  @-webkit-keyframes slide-fwd-top {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(-100px);
      transform: translateZ(160px) translateY(-100px);
    }
  }
  @keyframes slide-fwd-top {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
    }
    100% {
      -webkit-transform: translateZ(160px) translateY(-100px);
      transform: translateZ(160px) translateY(-100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-fwd-center
 * ----------------------------------------
 */
  @-webkit-keyframes slide-fwd-center {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    100% {
      -webkit-transform: translateZ(160px);
      transform: translateZ(160px);
    }
  }
  @keyframes slide-fwd-center {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    100% {
      -webkit-transform: translateZ(160px);
      transform: translateZ(160px);
    }
  }

  /**
 * ----------------------------------------
 * animation slide-bck-tl
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bck-tl {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(-200px) translateX(-200px);
      transform: translateZ(-400px) translateY(-200px) translateX(-200px);
    }
  }
  @keyframes slide-bck-tl {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(-200px) translateX(-200px);
      transform: translateZ(-400px) translateY(-200px) translateX(-200px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-bck-left
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bck-left {
    0% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateX(-200px);
      transform: translateZ(-400px) translateX(-200px);
    }
  }
  @keyframes slide-bck-left {
    0% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateX(-200px);
      transform: translateZ(-400px) translateX(-200px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-bck-bl
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bck-bl {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(200px) translateX(-200px);
      transform: translateZ(-400px) translateY(200px) translateX(-200px);
    }
  }
  @keyframes slide-bck-bl {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(200px) translateX(-200px);
      transform: translateZ(-400px) translateY(200px) translateX(-200px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-bck-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bck-bottom {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(200px);
      transform: translateZ(-400px) translateY(200px);
    }
  }
  @keyframes slide-bck-bottom {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(200px);
      transform: translateZ(-400px) translateY(200px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-bck-br
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bck-br {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(200px) translateX(200px);
      transform: translateZ(-400px) translateY(200px) translateX(200px);
    }
  }
  @keyframes slide-bck-br {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(200px) translateX(200px);
      transform: translateZ(-400px) translateY(200px) translateX(200px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-bck-right
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bck-right {
    0% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateX(200px);
      transform: translateZ(-400px) translateX(200px);
    }
  }
  @keyframes slide-bck-right {
    0% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateX(200px);
      transform: translateZ(-400px) translateX(200px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-bck-tr
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bck-tr {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(-200px) translateX(200px);
      transform: translateZ(-400px) translateY(-200px) translateX(200px);
    }
  }
  @keyframes slide-bck-tr {
    0% {
      -webkit-transform: translateZ(0) translateY(0) translateX(0);
      transform: translateZ(0) translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(-200px) translateX(200px);
      transform: translateZ(-400px) translateY(-200px) translateX(200px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-bck-top
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bck-top {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(-200px);
      transform: translateZ(-400px) translateY(-200px);
    }
  }
  @keyframes slide-bck-top {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(-200px);
      transform: translateZ(-400px) translateY(-200px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-bck-center
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bck-center {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    100% {
      -webkit-transform: translateZ(-400px);
      transform: translateZ(-400px);
    }
  }
  @keyframes slide-bck-center {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    100% {
      -webkit-transform: translateZ(-400px);
      transform: translateZ(-400px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-tl
 * ----------------------------------------
 */
  @-webkit-keyframes slide-tl {
    0% {
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateY(-100px) translateX(-100px);
      transform: translateY(-100px) translateX(-100px);
    }
  }
  @keyframes slide-tl {
    0% {
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateY(-100px) translateX(-100px);
      transform: translateY(-100px) translateX(-100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-left
 * ----------------------------------------
 */
  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-bl
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bl {
    0% {
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateY(100px) translateX(-100px);
      transform: translateY(100px) translateX(-100px);
    }
  }
  @keyframes slide-bl {
    0% {
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateY(100px) translateX(-100px);
      transform: translateY(100px) translateX(-100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-br
 * ----------------------------------------
 */
  @-webkit-keyframes slide-br {
    0% {
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateY(100px) translateX(100px);
      transform: translateY(100px) translateX(100px);
    }
  }
  @keyframes slide-br {
    0% {
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateY(100px) translateX(100px);
      transform: translateY(100px) translateX(100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-right
 * ----------------------------------------
 */
  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-tr
 * ----------------------------------------
 */
  @-webkit-keyframes slide-tr {
    0% {
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateY(-100px) translateX(100px);
      transform: translateY(-100px) translateX(100px);
    }
  }
  @keyframes slide-tr {
    0% {
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateY(-100px) translateX(100px);
      transform: translateY(-100px) translateX(100px);
    }
  }
  /**
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }
`
