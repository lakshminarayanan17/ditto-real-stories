import { useCallback, useEffect, useState } from "react";

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

type Slot = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  opacity: number;
  blur: number;
  z: number;
};

const slots: Record<number, Slot> = {
  [-2]: { x: -460, y: 56, rotate: -19, scale: 0.92, opacity: 0.38, blur: 2.5, z: 1 },
  [-1]: { x: -240, y: 12, rotate: -9.5, scale: 0.96, opacity: 0.55, blur: 1.5, z: 2 },
  [0]:  { x: 0,    y: 0,  rotate: 0,    scale: 1,    opacity: 1,    blur: 0,   z: 5 },
  [1]:  { x: 240,  y: 12, rotate: 9.5,  scale: 0.96, opacity: 0.55, blur: 1.5, z: 2 },
  [2]:  { x: 460,  y: 56, rotate: 19,   scale: 0.92, opacity: 0.38, blur: 2.5, z: 1 },
};

function offsetFor(index: number, active: number, length: number) {
  const half = Math.floor(length / 2);
  return ((index - active + length + half) % length) - half;
}

export function RealStories() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((a) => (a + 1) % stories.length);
  }, []);
  const prev = useCallback(() => {
    setActive((a) => (a - 1 + stories.length) % stories.length);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, #cfe0f5 0%, #eef3fa 38%, #ffffff 75%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-6 pt-20 pb-16 text-center">
        <h2
          className="font-serif text-[clamp(28px,3.4vw,38px)] leading-[1.18] text-[var(--color-ink-deep)]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Real Stories
          <br />
          Real Impact
        </h2>
        <p
          className="mx-auto mt-4 max-w-[300px] text-[16px] leading-snug text-[var(--color-ink)]"
          style={{ letterSpacing: "0.02em" }}
        >
          See how Ditto helps others, and find out what it can do for you.
        </p>
      </div>

      <div className="relative mx-auto h-[480px] w-full max-w-[1280px]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {stories.map((story, i) => {
            const off = offsetFor(i, active, stories.length);
            const slot = slots[off];
            const visible = !!slot;
            const isActive = off === 0;

            return (
              <button
                key={story.id}
                type="button"
                aria-label={`Show story: ${story.problem.slice(0, 40)}…`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => !isActive && setActive(i)}
                tabIndex={visible ? 0 : -1}
                className="absolute left-1/2 top-1/2 block cursor-pointer p-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)] rounded-[26px]"
                style={{
                  transform: visible
                    ? `translate(-50%, -50%) translate(${slot.x}px, ${slot.y}px) rotate(${slot.rotate}deg) scale(${slot.scale})`
                    : `translate(-50%, -50%) translate(${off < 0 ? -800 : 800}px, 120px) rotate(${off < 0 ? -28 : 28}deg) scale(0.85)`,
                  opacity: visible ? slot.opacity : 0,
                  filter: visible ? `blur(${slot.blur}px)` : "blur(4px)",
                  zIndex: visible ? slot.z : 0,
                  pointerEvents: isActive ? "none" : visible ? "auto" : "none",
                  transition:
                    "transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 600ms ease, filter 500ms ease",
                }}
              >
                <Card story={story} active={isActive} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-4 pb-20">
        <NavButton direction="prev" onClick={prev} />
        <NavButton direction="next" onClick={next} />
      </div>
    </section>
  );
}

function Card({ story, active }: { story: Story; active: boolean }) {
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
      {!active && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(247, 248, 250, 0.06)" }}
        />
      )}
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
