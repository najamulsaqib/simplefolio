import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { defaultProps, targetElements } from "./data/scrollRevealConfig";
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";

injectSpeedInsights();
inject();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
