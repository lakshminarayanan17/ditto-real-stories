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
  {
    id: "preexisting",
    bg: "#7861c2",
    textColor: "#ded4ff",
    problem:
      "A pre-existing condition almost got the entire claim denied at intimation.",
    solution:
      "Ditto pulled the policy fine print and proved the condition was covered.",
    image: "/cards/doctor-call-2.png",
    imageAlt: "Doctor on a call",
    imageStyle: { right: "-20px", bottom: "0px", width: "220px" },
  },
  {
    id: "network",
    bg: "#0c3660",
    textColor: "#dedede",
    problem:
      "The hospital wasn't on the cashless network and the family was asked to pay upfront.",
    solution:
      "Ditto opened a reimbursement track and chased it till the money landed.",
    image: "/cards/hospital-bed.png",
    imageAlt: "Hospital bedside",
    imageStyle: { right: "-30px", bottom: "0px", width: "230px" },
  },
  {
    id: "reimbursement",
    bg: "#c28e61",
    textColor: "#faede1",
    problem:
      "A reimbursement was sitting in 'under review' for over five weeks.",
    solution:
      "Ditto called the insurer daily and got the payout cleared in 48 hours.",
    image: "/cards/thumbsup.png",
    imageAlt: "Patients giving thumbs up",
    imageStyle: { right: "-30px", bottom: "-10px", width: "260px" },
  },
  {
    id: "premium",
    bg: "#a3c6ed",
    textColor: "#0b3967",
    problem:
      "A surprise premium hike at renewal made the policy unaffordable overnight.",
    solution:
      "Ditto compared every plan and moved them to one that kept the same cover.",
    image: "/cards/doctor-glasses-2.png",
    imageAlt: "Doctor with glasses thinking",
    imageStyle: { right: "-30px", bottom: "0px", width: "230px" },
  },
  {
    id: "documentation",
    bg: "#bcc2c8",
    textColor: "#0b3967",
    problem:
      "Critical papers got lost between the hospital and the insurer's office.",
    solution:
      "Ditto rebuilt the file from scratch and resubmitted within a single day.",
    image: "/cards/doctor-2.png",
    imageAlt: "Doctor reviewing files",
    imageStyle: { right: "-12px", bottom: "0px", width: "190px" },
  },
  {
    id: "coverage",
    bg: "#c2a761",
    textColor: "#fff4dc",
    problem:
      "Confusion about what was actually covered nearly caused a missed surgery.",
    solution:
      "Ditto walked through every clause and got pre-auth in time for the OT.",
    image: "/cards/doctor-call.png",
    imageAlt: "Doctor on phone",
    imageStyle: { right: "-12px", bottom: "-8px", width: "210px" },
  },
  {
    id: "first-claim",
    bg: "#7861c2",
    textColor: "#ded4ff",
    problem:
      "First-time claim, no idea what to file, and a panicked midnight call from the ER.",
    solution:
      "Ditto handled the paperwork end-to-end so the family could focus on care.",
    image: "/cards/doctor-glasses.png",
    imageAlt: "Doctor reading documents",
    imageStyle: { right: "-20px", bottom: "0px", width: "200px" },
  },
];

export function RealStories() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
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

      <div className="mx-auto w-full max-w-[1280px] px-6 pt-10 pb-6 text-center">
        <h2
          className="font-serif text-[clamp(28px,3vw,38px)] leading-[1.18] text-[var(--color-ink-deep)]"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
        >
          Real Stories
          <br />
          Real Impact
        </h2>
        <p
          className="mx-auto mt-3 max-w-[320px] text-[16px] leading-snug text-[var(--color-ink)]"
          style={{ letterSpacing: "0.02em" }}
        >
          See how Ditto helps others, and find out what it can do for you.
        </p>
      </div>

      <div className="real-stories-swiper-shell relative mx-auto mt-[50px] w-full max-w-[1440px]">
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
              style={{ width: "320px" }}
            >
              <div className="testimonial_card">
                <Card story={story} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="real-stories-nav absolute left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-4">
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
  // Scale image positioning ~1.2× to match the larger card
  const scaledImageStyle: React.CSSProperties = story.imageStyle
    ? {
        ...story.imageStyle,
        width:
          typeof story.imageStyle.width === "string"
            ? `${parseInt(story.imageStyle.width, 10) * 1.2}px`
            : story.imageStyle.width,
      }
    : {};

  return (
    <div
      className="relative h-[440px] w-[320px] overflow-hidden rounded-[30px] border-2 border-[#f7f8fa] text-left shadow-[0_30px_60px_-30px_rgba(15,30,60,0.25)]"
      style={{ background: story.bg }}
    >
      <img
        src={story.image}
        alt={story.imageAlt}
        draggable={false}
        className="pointer-events-none absolute select-none"
        style={{
          ...scaledImageStyle,
          maxWidth: "none",
        }}
      />
      <div className="relative h-full p-6">
        <p
          className="text-[21px] font-medium leading-[1.25] tracking-[0.01em]"
          style={{ color: story.textColor }}
        >
          {story.problem}
        </p>
        <p
          className="mt-7 text-[21px] font-medium leading-[1.25] tracking-[0.01em]"
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
