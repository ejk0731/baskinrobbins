// home ///////////////////////////////////////////////////
//글씨 효과
let count = 0;
let int_box = "";

int_box = setInterval(function(){
    $('.txt').eq(count).addClass('txt_active')
    count +=1 ;

    if(count >=  $('.txt').length){
        clearInterval(int_box)
    }
}, 100)

// sec_title 효과 /////////////////////////////////////////



// skills /////////////////////////////////////////////////
//gauge바 애니메이션
let skill_top = $('#sec2').offset().top;
let percent_chk = true;

$(window).scroll(function(){
    let w_top = $(window).scrollTop();

    let percent_num1 = 0 
    let percent_num2 = 0 
    let percent_num3 = 0 

    if(percent_chk && w_top >= skill_top - 600) {
        percent_chk = false;

        //게이지바 너비 늘어나는 효과
        let gauge_timer = 400;
        
        $('.gauge_90').animate({
            width: '90%'
        }, gauge_timer)
        $('.gauge_85').animate({
            width: '85%'
        }, gauge_timer)
        $('.gauge_80').animate({
            width: '80%'
        }, gauge_timer)
        
        //숫자 커지는 효과

        let percent_box1 = setInterval(function(){
            $('.percent_90').text(percent_num1)
            percent_num1 += 1;

            if(percent_num1 > 90) {
                clearInterval(percent_box1)
            }
            // }
        }, 10)
        

        let percent_box2 = setInterval(function(){
            $('.percent_80').text(percent_num2)
            percent_num2 += 1;

            if(percent_num2 > 80) {
                clearInterval(percent_box2)
            }
            // }
        }, 10)


        let percent_box3 = setInterval(function(){
            $('.percent_85').text(percent_num3)
            percent_num3 += 1;

            if(percent_num3 > 85) {
                clearInterval(percent_box3)
            }
            // }
        }, 10)

    }

})

// portfolio //////////////////////////////////////////////
let sec3_top_1 = $('#sec3').offset().top;
// let sec3_top_2 = $('#sec3 > .contents').eq(1).offset().top;

$(window).scroll(function(){
    let s_top = $(window).scrollTop();
    if(s_top >= sec3_top_1 - 500) {
        $('.p_imgbox1 > img').addClass('p_img1_active')
    }
    // if(s_top >= sec3_top_2 - 500) {
    //     console.log(1212)
    //     $('.p_imgbox2 > img').addClass('p_img2_active')
    //     console.log(1313)
    // }
})

// contact ////////////////////////////////////////////////
let sec4_top = $('#sec4').offset().top;

$(window).scroll(function(){
    let s_top = $(window).scrollTop();
    let con_count = 0;
    
    if(s_top >= sec4_top - 600) {

        let con_intbox = setInterval(function(){
            $('.contact_box').eq(con_count).addClass('contact_box_active')
            con_count += 1;

            if(con_count > $('.contact_box').length) {
                clearInterval(con_intbox)
            }
        }, 100)

    }
})
