const ITEM_LIST = [
    //best
    [
        {item_no: 1, src: '1.png', title: '엄마는 외계인', o_price: 30000, s_price: 20000, desc: '#초콜릿 #초코볼'}, 
        {item_no: 2, src: '2.png', title: '아몬드 봉봉', o_price: 30000, s_price: 20000, desc: '#아몬드 #초콜릿'}, 
        {item_no: 3, src: '3.png', title: '민트 초콜릿칩', o_price: 30000, s_price: 20000, desc: '#민트 #초콜릿칩'},
        {item_no: 4, src: '4.png', title: '뉴욕 치즈케이크', o_price: 30000, s_price: 20000, desc: '#치즈 #치즈케이크'},
        {item_no: 5, src: '5.png', title: 'NEW 슈팅스타', o_price: 30000, s_price: 20000, desc: '#팝핑캔디 #체리시럽'},
        {item_no: 6, src: '6.png', title: '체리쥬빌레', o_price: 30000, s_price: 20000, desc: '#체리 #체리쥬빌레'},
        {item_no: 7, src: '7.png', title: '레인보우 샤베트', o_price: 30000, s_price: 20000, desc: '#파인애플 #오렌지'},
        {item_no: 8, src: '8.png', title: '베리베리 스트로베리', o_price: 30000, s_price: 20000, desc: '#베리베리 #스트로베리'},
        {item_no: 9, src: '9.png', title: '31 올스타', o_price: 30000, s_price: 20000, desc: '#31올스타 #초콜릿아이스크림'}
    ],
    // icecream
    [ 
        {item_no: 1, src: '1.png', title: '피카피카 피카츄', o_price: 30000, s_price: 20000, desc: '#바나나 #커스터드크림'}, 
        {item_no: 2, src: '2.png', title: '나와라 꼬부기', o_price: 10000, s_price: 20000, desc: '#꼬부기 #소다'}, 
        {item_no: 3, src: '3.png', title: '사랑에 빠진 외계인', o_price: 2000, s_price: 20000, desc: '#사빠딸 #엄마는외계인'}, 
        {item_no: 4, src: '4.png', title: '브라운 버터 메이플', o_price: 30000, s_price: 20000, desc: '#메이플 #브라운버터'}, 
        {item_no: 5, src: '5.png', title: '찰떡콩떡', o_price: 30000, s_price: 20000, desc: '#찰떡콩떡 #콩고물'}, 
        {item_no: 6, src: '6.png', title: '오레오 쿠키 앤 크림', o_price: 30000, s_price: 20000, desc: '#오레오쿠키앤크림'}, 
        {item_no: 7, src: '7.png', title: '월넛', o_price: 30000, s_price: 20000, desc: '#월넛'}, 
        {item_no: 8, src: '8.png', title: '오레오 쿠키 앤 민트', o_price: 30000, s_price: 20000, desc: '#오레오쿠키앤민트 #민트아이스크림'}, 
        {item_no: 9, src: '9.png', title: '31 올스타', o_price: 30000, s_price: 20000, desc: '#31올스타 #초콜릿아이스크림'}, 
        {item_no: 10, src: '10.png', title: '쌀떡궁합', o_price: 30000, s_price: 20000, desc: '#쌀떡궁합 #쌀아이스크림'}, 
        {item_no: 11, src: '11.png', title: '블랙 소르베', o_price: 30000, s_price: 20000, desc: '#블랙소르베 #레몬라임소르베'}, 
        {item_no: 12, src: '12.png', title: '알폰소 망고', o_price: 30000, s_price: 20000, desc: '#망고'}, 
        {item_no: 13, src: '13.png', title: '엄마는 외계인', o_price: 30000, s_price: 20000, desc: '#초콜릿 #초코볼'}, 
        {item_no: 14, src: '14.png', title: '오레오 쿠키 앤 크림치즈', o_price: 30000, s_price: 20000, desc: '#오레오쿠키앤크림치즈 #크림치즈아이스크림'}, 
        {item_no: 15, src: '15.png', title: '아빠는 딸바봉', o_price: 30000, s_price: 20000, desc: '#아빠는딸바봉 #딸기아이스크림'}, 
        {item_no: 16, src: '16.png', title: '쫀떡궁합', o_price: 30000, s_price: 20000, desc: '#쫀떡 #인절미'}, 
        {item_no: 17, src: '17.png', title: '아몬드 봉봉', o_price: 30000, s_price: 20000, desc: '#아몬드 #초콜릿'}, 
        {item_no: 18, src: '18.png', title: '민트 초콜릿칩', o_price: 30000, s_price: 20000, desc: '#민트 #초콜릿칩'}, 
        {item_no: 19, src: '19.png', title: 'NEW 슈팅스타', o_price: 30000, s_price: 20000, desc: '#팝핑캔디 #체리시럽'}, 
        {item_no: 20, src: '20.png', title: '애플 민트', o_price: 30000, s_price: 20000, desc: '#애플민트 #사과'}, 
        {item_no: 21, src: '21.png', title: '레인보우 샤베트', o_price: 30000, s_price: 20000, desc: '#파인애플 #오렌지'}, 
        {item_no: 22, src: '22.png', title: '뉴욕 치즈케이크', o_price: 30000, s_price: 20000, desc: '#치즈 #치즈케이크'}, 
        {item_no: 23, src: '23.png', title: '체리쥬빌레', o_price: 30000, s_price: 20000, desc: '#체리 #체리쥬빌레'}, 
        {item_no: 24, src: '24.png', title: '베리베리 스트로베리', o_price: 30000, s_price: 20000, desc: '#베리베리 #스트로베리'}
    ],
    //icecreamcake
    [ 
        {item_no: 1, src: '1.png', title: '잡아라! 포켓몬 몬스터볼', o_price: 30000, s_price: 20000, desc: '#몬스터볼 #엄마는외계인'}, 
        {item_no: 2, src: '2.png', title: '사랑에 빠진 외계인 케이크', o_price: 10000, s_price: 20000, desc: '#사빠외 #케이크'}, 
        {item_no: 3, src: '3.png', title: '미니 해피 버스데이 케이크', o_price: 2000, s_price: 20000, desc: '#해피버스데이 #미니'}, 
        {item_no: 4, src: '4.png', title: '미니 골라먹는 와츄원', o_price: 30000, s_price: 20000, desc: '#생일 #케이크'}, 
        {item_no: 5, src: '5.png', title: '딸기 생크림 케이크', o_price: 30000, s_price: 20000, desc: '#딸기 #케이크'}, 
        {item_no: 6, src: '6.png', title: '베라에 찾아 온 뚱랑이', o_price: 30000, s_price: 20000, desc: '#뚱랑이 #호랑이'}, 
        {item_no: 7, src: '7.png', title: '해피 버스데이 케이크', o_price: 30000, s_price: 20000, desc: '#엄마는외계인 # 민트초콜릿칩'}, 
        {item_no: 8, src: '8.png', title: '빙그르르 마카롱', o_price: 30000, s_price: 20000, desc: '#마카롱 #케이크'}, 
        {item_no: 9, src: '9.png', title: '엄마는 외계인 케이크', o_price: 30000, s_price: 20000, desc: '#엄마는외계인 #초코볼'}, 
        {item_no: 10, src: '10.png', title: '와르르 톡톡 미니 볼', o_price: 30000, s_price: 20000, desc: '#초코볼 #구슬아이스크림'}, 
        {item_no: 11, src: '11.png', title: '골라먹는 스노우 볼', o_price: 30000, s_price: 20000, desc: '#스노우볼 #파티케이크'}, 
        {item_no: 12, src: '12.png', title: '듀얼 와츄원 NO.9', o_price: 30000, s_price: 20000, desc: '#엄마는외계인 #아몬드봉봉'}, 
        {item_no: 13, src: '13.png', title: '골라먹는 와츄원', o_price: 30000, s_price: 20000, desc: '#엄마는외계인 #베리베리스트로베리'}, 
        {item_no: 14, src: '14.png', title: '리얼 27 큐브', o_price: 30000, s_price: 20000, desc: '#큐브 #아몬드봉봉'}, 
        {item_no: 15, src: '15.png', title: '해피데이 카카오프렌즈', o_price: 30000, s_price: 20000, desc: '#카카오프렌즈 #뉴욕치즈케이크'}, 
        {item_no: 16, src: '16.png', title: '시크릿 라이언', o_price: 30000, s_price: 20000, desc: '#시크릿라이언 #슈팅스타'}, 
        {item_no: 17, src: '17.png', title: '스윗 플라워 가든', o_price: 30000, s_price: 20000, desc: '#바나나 #블루베리치즈케이크'}, 
        {item_no: 18, src: '18.png', title: '나눠먹는 와츄원', o_price: 30000, s_price: 20000, desc: '#슈팅스타 #뉴욕치즈케이크'}, 
        {item_no: 19, src: '19.png', title: '시크릿 어피치', o_price: 30000, s_price: 20000, desc: '#시크릿어피치 #베리베리스트로베리'}, 
        {item_no: 20, src: '20.png', title: '바로먹는 와츄원', o_price: 30000, s_price: 20000, desc: '#엄마는외계인 #뉴욕치즈케이크'}
    ],
    //beverage
    [ 
        {item_no: 1, src: '1.png', title: '피카츄 초코바나나 블라스트', o_price: 30000, s_price: 20000, desc: '#피카츄 #초코바나나'}, 
        {item_no: 2, src: '2.png', title: '쿨쿨 잠만보 밀키소다 블라스트', o_price: 10000, s_price: 20000, desc: '#잠만보 #밀키소다'}, 
        {item_no: 3, src: '3.png', title: '엄마는 외계인 초코라떼', o_price: 2000, s_price: 20000, desc: '#엄마는외계인 #초코라떼'}, 
        {item_no: 4, src: '4.png', title: '딸기 말랑 블라스트', o_price: 30000, s_price: 20000, desc: '#딸기 #블라스트'}, 
        {item_no: 5, src: '5.png', title: '오레오 카푸치노 블라스트', o_price: 30000, s_price: 20000, desc: '#오레오 #카푸치노'}, 
        {item_no: 6, src: '6.png', title: '맥심 모카골드 블라스트', o_price: 30000, s_price: 20000, desc: '#맥심모카골드 #블라스트'}, 
        {item_no: 7, src: '7.png', title: '유자 캐모마일 티', o_price: 30000, s_price: 20000, desc: '#유자 #캐모마일'}, 
        {item_no: 8, src: '8.png', title: '아이스 유자 캐모마일 티', o_price: 30000, s_price: 20000, desc: '#유자 #캐모마일'}, 
        {item_no: 9, src: '9.png', title: '카푸치노 블라스트 리얼샷', o_price: 30000, s_price: 20000, desc: '#카푸치노 #블라스트'}, 
        {item_no: 10, src: '10.png', title: '딸기 연유 라떼', o_price: 30000, s_price: 20000, desc: '#딸기 #연유'}, 
        {item_no: 11, src: '11.png', title: '아몬드 봉봉 블라스트', o_price: 30000, s_price: 20000, desc: '#아몬드봉봉블라스트'}, 
        {item_no: 12, src: '12.png', title: '복숭아 아이스티', o_price: 30000, s_price: 20000, desc: '#아이스티 #복숭아'}, 
        {item_no: 13, src: '13.png', title: '스위스미스 아이스 초코', o_price: 30000, s_price: 20000, desc: '#아이스초코 #초콜릿'}, 
        {item_no: 14, src: '14.png', title: '설향 딸기 블라스트', o_price: 30000, s_price: 20000, desc: '#딸기 #설향딸기'}, 
        {item_no: 15, src: '15.png', title: '오레오 쉐이크', o_price: 30000, s_price: 20000, desc: '#오레오쉐이크 #오레오쿠키크럼블'}, 
        {item_no: 16, src: '16.png', title: '레몬라임 블라스트', o_price: 30000, s_price: 20000, desc: '#레몬라임 #블렌디드'}, 
        {item_no: 17, src: '17.png', title: '밀크 쉐이크', o_price: 30000, s_price: 20000, desc: '#밀크 #쉐이크'}, 
        {item_no: 18, src: '18.png', title: '카푸치노 블라스트 모카', o_price: 30000, s_price: 20000, desc: '#카푸치노 #모카'}, 
        {item_no: 19, src: '19.png', title: '카푸치노 블라스트 오리지널', o_price: 30000, s_price: 20000, desc: '#카푸치노 #블라스트'}, 
        {item_no: 20, src: '20.png', title: '엄마는 외계인 블라스트', o_price: 30000, s_price: 20000, desc: '#엄마는외계인 #블라스트'}
    ],
    //coffee
    [ 
        {item_no: 1, src: '1.png', title: '콜드브루 아메리카노', o_price: 30000, s_price: 20000, desc: '#콜드브루 #아메리카노'}, 
        {item_no: 2, src: '2.png', title: '콜드브루 오트라떼', o_price: 10000, s_price: 20000, desc: '#콜드브루 #라떼'}, 
        {item_no: 3, src: '3.png', title: '카페31 아메리카노', o_price: 2000, s_price: 20000, desc: '#아메리카노 #아이스크림'}, 
        {item_no: 4, src: '4.png', title: '아메리카노', o_price: 30000, s_price: 20000, desc: '#아메리카노 #카페브리즈'}, 
        {item_no: 5, src: '5.png', title: '아이스 아메리카노', o_price: 30000, s_price: 20000, desc: '#카페브리즈 #아메리카노'}, 
        {item_no: 6, src: '6.png', title: '아메리카노 (L)', o_price: 30000, s_price: 20000, desc: '#아메리카노'}, 
        {item_no: 7, src: '7.png', title: '아이스 아메리카노 (L)', o_price: 30000, s_price: 20000, desc: '#아이스 #아메리카노'}, 
        {item_no: 8, src: '8.png', title: '바닐라빈 라떼', o_price: 30000, s_price: 20000, desc: '#바닐라빈 #라떼'}, 
        {item_no: 9, src: '9.png', title: '아이스 바닐라빈 라떼', o_price: 30000, s_price: 20000, desc: '#바닐라빈 #라떼'}, 
        {item_no: 10, src: '10.png', title: '연유 라떼', o_price: 30000, s_price: 20000, desc: '#우유 #연유'}, 
        {item_no: 11, src: '11.png', title: '아이스 연유 라떼', o_price: 30000, s_price: 20000, desc: '#연유 #우유'}, 
        {item_no: 12, src: '12.png', title: '카페 라떼', o_price: 30000, s_price: 20000, desc: '#라떼 #카페브리즈'}, 
        {item_no: 13, src: '13.png', title: '아이스 카페 라떼', o_price: 30000, s_price: 20000, desc: '#라떼 #카페브리즈'}, 
        {item_no: 14, src: '14.png', title: '카라멜 마키아또', o_price: 30000, s_price: 20000, desc: '#카라멜 #마끼아또'}, 
        {item_no: 15, src: '15.png', title: '아이스 카라멜 마끼아또', o_price: 30000, s_price: 20000, desc: '#카라멜 #마끼아또'}, 
        {item_no: 16, src: '16.png', title: '민트 초코 모카', o_price: 30000, s_price: 20000, desc: '#민트초코'}, 
        {item_no: 17, src: '17.png', title: '아이스 민트초코 모카', o_price: 30000, s_price: 20000, desc: '#민트초코'}   
    ],
    //dessert
    [ 
        {item_no: 1, src: '1.png', title: '고라파덕 아이스크림 콘', o_price: 30000, s_price: 20000, desc: '#바닐라 #초코리본'}, 
        {item_no: 2, src: '2.png', title: '푸린 아이스크림 콘', o_price: 10000, s_price: 20000, desc: '#딸기 #팝핑캔디'}, 
        {item_no: 3, src: '3.png', title: '사랑에 빠진 하트 마카롱', o_price: 2000, s_price: 20000, desc: '#사빠외 #마카롱'}, 
        {item_no: 4, src: '4.png', title: '아이스 초코파이 초코마시멜로', o_price: 30000, s_price: 20000, desc: '#초코파이 #마시멜로'}, 
        {item_no: 5, src: '5.png', title: '아이스 초코파이 민트 초코칩', o_price: 30000, s_price: 20000, desc: '#민트 #초코파이'}, 
        {item_no: 6, src: '6.png', title: '아이스 모찌 사랑에 빠진 외계인', o_price: 30000, s_price: 20000, desc: '#사빠외 #모찌'}, 
        {item_no: 7, src: '7.png', title: '소금우유 아이스 모찌', o_price: 30000, s_price: 20000, desc: '#소금우유 #모찌'}, 
        {item_no: 8, src: '8.png', title: '아이스크림 콘 아몬드봉봉', o_price: 30000, s_price: 20000, desc: '#아몬드봉봉 #콘'}, 
        {item_no: 9, src: '9.png', title: '제주 감귤 아이스 모찌', o_price: 30000, s_price: 20000, desc: '#제주 감귤 아이스 모찌'}, 
        {item_no: 10, src: '10.png', title: '오레오 킹 아이스 샌드 밀크쿠키', o_price: 30000, s_price: 20000, desc: '#오레오쿠키 #밀크쿠키'}, 
        {item_no: 11, src: '11.png', title: '오레오 킹아이스 샌드 민트 초코칩', o_price: 30000, s_price: 20000, desc: '#아이스오레오킹아이스샌드민트초코칩'}, 
        {item_no: 12, src: '12.png', title: '아이스 호떡 (모찌)', o_price: 30000, s_price: 20000, desc: '#아이스호떡'}, 
        {item_no: 13, src: '13.png', title: '아빵 우유', o_price: 30000, s_price: 20000, desc: '#아빵우유'}, 
        {item_no: 14, src: '14.png', title: '아이스 바나나 모나카', o_price: 30000, s_price: 20000, desc: '#아이스바나나모나카'}, 
        {item_no: 15, src: '15.png', title: '아이스 모찌 바나나킥', o_price: 30000, s_price: 20000, desc: '#아이스모찌바나나킥'}, 
        {item_no: 16, src: '16.png', title: '아이스 모찌 크림치즈', o_price: 30000, s_price: 20000, desc: '#아이스모찌 #크림치즈'}, 
        {item_no: 17, src: '17.png', title: '아이스크림 스틱바 초코그린티', o_price: 30000, s_price: 20000, desc: '#아이스크림스틱바 #초코그린티'}, 
        {item_no: 18, src: '18.png', title: '아이스크림 스틱바 민트쿠앤크', o_price: 30000, s_price: 20000, desc: '#아이스크림스틱바 #민트쿠앤크'}, 
        {item_no: 19, src: '19.png', title: '미니 아이스 모찌 <br>(스트로베리, 망고, 그린티)', o_price: 30000, s_price: 20000, desc: '#아이스모찌 #스트로베리'}, 
        {item_no: 20, src: '20.png', title: '아이스 마카롱 쿠키앤크림', o_price: 30000, s_price: 20000, desc: '#아이스마카롱 #쿠키앤크림'}
    ],
]

let menu_array = ['best', 'icecream', 'icecreamcake', 'beverage', 'coffee', 'dessert']
let title_array = ['BEST', 'ICECREAM', 'ICECREAMCAKE', 'BEVERAGE', 'COFFEE', 'DESSERT']