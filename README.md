# React로 Skeleton Component 구현하기
React로 Skeleton ui를 구현하는 연습 프로젝트입니다.

![image](https://user-images.githubusercontent.com/85891751/135757163-45d3c1b0-ba20-4148-9958-147993ef4068.png)

- data를 업데이트 되기전에는 skeleton component를 보여주고 업데이트 된 뒤에는 받아온 data를 보여줍니다.

![image](https://user-images.githubusercontent.com/85891751/135757235-98a222c4-3a85-4b11-ba5a-26e565a92d4b.png)

## 좀더 자연스러운 loading을 위한 animation
![](https://miro.medium.com/max/700/1*rrY0dyPqgZBMln_VVPx9Gg.gif)

이런식으로 자연스러운 loading을 보여주기 위해 component위에 선이 지나가는 animation을 `@keyframe`을 통해 넣어주었습니다.

```css
.shimmer-wrapper {
    position : absolute;
    top: 0;
    left : 0;
    width : 100%;
    height : 100%;
    animation: loading 2.5s infinite;
}

.shimmer {
    width : 50%;
    height: 100%;
    background-color: rgba(255,255,255,0.2);
    transform: skewX(-20deg);
    box-shadow: 0 0 30px 30px rgba(255,255,255,0.05);
}

@keyframes loading {
    0% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-60%);
    }
    100% {
      transform: translate(150%);
    }
  }
  
```
animation을 위한 css 코드입니다.
