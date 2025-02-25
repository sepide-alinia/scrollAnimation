import ScrollAnimation from "react-animate-on-scroll";
import worker from "../../images/worker.png";
import Counter from "../counter/Counter";
import { useInView } from 'react-intersection-observer';

export default function MiddleBanner() {


const { ref: myRef, inView: isVisible } = useInView();




  return (
    <div className=" bg-[url('../../src/images/bg.jpg')] bg-cover  h-screen flex flex-row-reverse items-center">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce>
        <div className="mr-18 ">
          <img className="size-10/12" src={worker} />
        </div>
      </ScrollAnimation>

      <div className="text-right  mr-12 flex flex-col items-end ">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <h1 className="text-[50px] leading-[65px] text-white  ">
            ما بهترین خدمات صنعتی
            <br />
            را ارائه می دهیم.
            <span className=" text-primary_1">
               ۳۵+ سال </span>
            <br />
            تجربه در صنایع
            <br />
            .جهانی
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div className="flex  mt-8">
            <Counter myRef={myRef}
            visible={isVisible}
              className1={
                "font-[vazir] border-r-[6px] text-[50px] text-primary_1 pr-[5rem] mr-[4rem]"
              }
              className2={
                " border-r-[6px] text-[22px] text-white pr-[5rem] mr-[4rem]"
              }
              number={110}
              description={"برنده جوایز"}
            />
            <Counter  myRef={myRef}
            visible={isVisible}
              className1={"font-[vazir] text-[50px] text-primary_1"}
              className2={"text-[22px] text-white"}
              number={1330}
              description={"کل پروژه ها"}
            />
          </div>
        </ScrollAnimation>
        <div className=" mt-8 w-[500px] ">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <p className="text-white w-full leading-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          <div className="mr-16 mt-12 leading-8">
                  <p className="text-white text-2xl font-semibold">مهندس ارشد</p>
                  <p className="text-white font-semibold">مارت هیلی</p>
          </div>
          </ScrollAnimation>

        </div>
      </div>
    </div>
  );
}
