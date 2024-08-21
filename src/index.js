import { injectSpeedInsights } from "@vercel/speed-insights";
import { defaultProps, targetElements } from "./data/scrollRevealConfig";
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";

injectSpeedInsights();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
