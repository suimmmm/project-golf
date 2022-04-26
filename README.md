
새 html 작성 할때 필수
1. 메뉴
<div id="menu-bar">
      <div id="sub-menu">
        <a href="#">
          <i class="fa-solid fa-user fa-2x"></i>
        </a>
        <a href="#">
          <i class="fa-solid fa-golf-ball-tee fa-2x"></i>
        </a>
        <a href="#">
          <i class="fa-solid fa-calendar-check fa-2x"></i>
        </a>
        <a href="#">
          <i class="fa-solid fa-comment-dots fa-2x"></i>
        </a>
        <a href="#">
          <i class="fa-solid fa-exclamation fa-2x"></i>
        </a>
        <a href="#">
          <i class="fa-solid fa-comments fa-2x"></i>
        </a>
      </div>
      <div id="menu-box">
        <i class="fa-solid fa-plus fa-2x"></i>
      </div>
</div>

2. 뒤로가기 아이콘
<section id="icon-box">
      <a href="./main.html">
        <i class="fa-solid fa-arrow-left fa-2x"></i>
      </a>
</section>

3. 폰트어썸
<script src="https://kit.fontawesome.com/d00def0550.js" crossorigin="anonymous"></script>

4. scss 
@mixin wid-hei($wid,$hei) {
  width: $wid;
  height: $hei;
}
@mixin flex($justify,$align,$direction,$wrap) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
  flex-direction: $direction;
  flex-wrap: $wrap;
}
@mixin margin($t-b, $l-r) {
  margin: $t-b $l-r;
}

어제 (0415) 메뉴 만들기까지 완성

오늘 할일
1. 5개 완성하기
2. js 공부 더 하기

0425 js 작업시작
1. 프로필 사진 업로드
2. 공지사항 / FAQ
3. 일정 https://jerryjerryjerry.tistory.com/26