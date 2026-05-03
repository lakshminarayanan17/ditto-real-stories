import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCreative,
  Keyboard,
  A11y,
} from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

type Story = {
  id: string;
  bg: string;
  textColor: string;
  problem: string;
  solution: string;
  image: string;
  imageAlt: string;
  imageStyle?: React.CSSProperties;
};

const stories: Story[] = [
  {
    id: "diagnosis",
    bg: "#7861c2",
    textColor: "#ded4ff",
    problem:
      "Claim stalled due to unclear diagnosis notes, leaving user confused about next steps.",
    solution: "Ditto arranged a quick doctor call to verify and align records.",
    image: "/cards/doctor-call.png",
    imageAlt: "Patient on phone with doctor",
    imageStyle: { right: "-12px", bottom: "-8px", width: "210px" },
  },
  {
    id: "documents",
    bg: "#0c3660",
    textColor: "#dedede",
    problem:
      "Post discharge, the submitted hospital documents had missing details.",
    solution:
      "Ditto flagged the rejection as invalid and escalated it with backing.",
    image: "/cards/doctor-glasses.png",
    imageAlt: "Doctor reviewing documents",
    imageStyle: { right: "-20px", bottom: "0px", width: "200px" },
  },
  {
    id: "rejection",
    bg: "#c28e61",
    textColor: "#faede1",
    problem:
      "After a short hospital stay, the claim was rejected with an unclear reason.",
    solution:
      "Ditto reviewed it, flagged it as invalid, and escalated it promptly.",
    image: "/cards/thumbsup.png",
    imageAlt: "Two patients giving thumbs up",
    imageStyle: { right: "-30px", bottom: "-10px", width: "260px" },
  },
  {
    id: "documents-2",
    bg: "#a3c6ed",
    textColor: "#0b3967",
    problem:
      "Forms were submitted with incomplete data, putting reimbursement at risk.",
    solution:
      "Ditto reviewed every line, fixed the gaps, and pushed it through.",
    image: "/cards/doctor-glasses-2.png",
    imageAlt: "Doctor with glasses",
    imageStyle: { right: "-30px", bottom: "0px", width: "230px" },
  },
  {
    id: "speed",
    bg: "#bcc2c8",
    textColor: "#0b3967",
    problem:
      "Family in panic over a slow-moving claim during a hospital admission.",
    solution:
      "Ditto stepped in within hours and got the cashless approval moving.",
    image: "/cards/doctor-2.png",
    imageAlt: "Concerned doctor",
    imageStyle: { right: "-12px", bottom: "0px", width: "190px" },
  },
];

export function RealStories() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #b8d2ee 0%, #d6e4f3 30%, #eaf0f8 55%, #ffffff 85%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "260px", opacity: 0.55 }}
      >
        <defs>
          <linearGradient id="rsHaze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a8c6e8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a8c6e8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L1440,0 L1440,180 C1140,260 900,280 720,250 C540,220 300,200 0,250 Z"
          fill="url(#rsHaze)"
        />
      </svg>

      <div className="mx-auto max-w-[1280px] px-6 pt-20 pb-14 text-center">
        <h2
          className="font-serif text-[clamp(30px,3.2vw,40px)] leading-[1.18] text-[var(--color-ink-deep)]"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
        >
          Real Stories
          <br />
          Real Impact
        </h2>
        <p
          className="mx-auto mt-4 max-w-[320px] text-[17px] leading-snug text-[var(--color-ink)]"
          style={{ letterSpacing: "0.02em" }}
        >
          See how Ditto helps others, and find out what it can do for you.
        </p>
      </div>

      <div className="real-stories-swiper-shell relative mx-auto w-full max-w-[1440px]">
        <Swiper
          modules={[Navigation, Pagination, EffectCreative, Keyboard, A11y]}
          className="testimonial_wrapper"
          effect="creative"
          slidesPerView="auto"
          centeredSlides
          loop
          speed={400}
          grabCursor
          keyboard={{ enabled: true }}
          initialSlide={0}
          creativeEffect={{
            limitProgress: 20,
            prev: {
              origin: "bottom right",
              translate: ["-100%", 0, 0],
              rotate: [0, 0, -7],
            },
            next: {
              origin: "bottom left",
              translate: ["100%", 0, 0],
              rotate: [0, 0, 7],
            },
          }}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          onSetTranslate={(s) => {
            // Port of joindawn's fan math: cards beyond ±1 progress get
            // additional translateX/Y so the fan continues to spread.
            const rotationAngle = 7;
            const xSpacingReduction = 0.2;
            const progressionFactor = 1.5;
            s.slides.forEach((slide) => {
              const progress = (slide as HTMLElement & { progress: number })
                .progress;
              const absProgress = Math.abs(progress);
              if (absProgress <= 1) return;
              const slideWidth = (slide as HTMLElement).offsetWidth;
              const slideHeight = (slide as HTMLElement).offsetHeight;
              const totalRotation = rotationAngle * absProgress;
              const radians = (totalRotation * Math.PI) / 180;
              const yOffset =
                (slideWidth / 2) * Math.sin(radians) * (absProgress - 1);
              const yOffsetPercent = (yOffset / slideHeight) * 100;
              const xOffset =
                (slideWidth / 2) *
                Math.sin(radians) *
                Math.pow(absProgress - 1, progressionFactor);
              const xOffsetPercent = (xOffset / slideHeight) * 100;
              const reducedXOffset = xOffsetPercent * xSpacingReduction;
              const finalXOffset =
                progress < 0 ? reducedXOffset : -reducedXOffset;
              (slide as HTMLElement).style.transform += ` translateX(${finalXOffset}%) translateY(${yOffsetPercent}%)`;
            });
          }}
        >
          {stories.map((story) => (
            <SwiperSlide
              key={story.id}
              className="testimonial_slide"
              style={{ width: "267px" }}
            >
              <div className="testimonial_card">
                <Card story={story} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex items-center justify-center gap-4">
          <NavButton
            direction="prev"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <NavButton
            direction="next"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </section>
  );
}

function Card({ story }: { story: Story }) {
  return (
    <div
      className="relative h-[359px] w-[267px] overflow-hidden rounded-[26px] border-2 border-[#f7f8fa] text-left shadow-[0_30px_60px_-30px_rgba(15,30,60,0.25)]"
      style={{ background: story.bg }}
    >
      <img
        src={story.image}
        alt={story.imageAlt}
        draggable={false}
        className="pointer-events-none absolute select-none"
        style={{
          ...story.imageStyle,
          maxWidth: "none",
        }}
      />
      <div className="relative h-full p-5">
        <p
          className="text-[18px] font-medium leading-[1.22] tracking-[0.01em]"
          style={{ color: story.textColor }}
        >
          {story.problem}
        </p>
        <p
          className="mt-6 text-[18px] font-medium leading-[1.22] tracking-[0.01em]"
          style={{ color: story.textColor }}
        >
          {story.solution}
        </p>
      </div>
    </div>
  );
}

function NavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const label = direction === "prev" ? "Previous story" : "Next story";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-[41px] w-[48px] place-items-center rounded-full bg-[#f9f9f9] text-[var(--color-mute)] transition hover:bg-[#eef0f3] active:scale-95"
    >
      <span
        aria-hidden
        className="block text-[22px] leading-none"
        style={{
          transform: direction === "prev" ? "scaleX(-1)" : "none",
        }}
      >
        →
      </span>
    </button>
  );
}
