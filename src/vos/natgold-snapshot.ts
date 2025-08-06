import { DEFAULT_DIFFERENCES_VO, Differences } from "./shared/differences";

/**
 * A Natgold snapshot value object containing price information.
 *
 * In order to preserve precision, all numeric values are returned as strings.
 */
export interface NatgoldSnapshot {
  id: number;
  timestamp: Date;
  natgold_price: string;
  natgold_previous_close_price: string | null;
  natgold_open_price: string | null;
  natgold_differences: Differences | undefined;
  aisc: string;
  aisc_previous_close: string | null;
  aisc_open: string | null;
  aisc_differences: Differences | undefined;
}

/**
 * Provides default values for the Natgold snapshot value object
 */
export const DEFAULT_NATGOLD_SNAPSHOT_VO: NatgoldSnapshot = {
  id: 0,
  timestamp: new Date(),
  natgold_price: "0.00",
  natgold_previous_close_price: "0.00",
  natgold_open_price: "0.00",
  natgold_differences: DEFAULT_DIFFERENCES_VO,
  aisc: "0.00",
  aisc_previous_close: "0.00",
  aisc_open: "0.00",
  aisc_differences: DEFAULT_DIFFERENCES_VO,
};
