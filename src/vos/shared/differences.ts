/**
 * A value object containing price differences as numeric and percentage values.
 *
 * In order to preserve precision, all numeric values are returned as strings.
 *
 * Note that the "percentage" does not include the "%" character
 */
export interface Differences {
  numeric: string;
  percentage: string;
}

/**
 * Provides defaults for the Differences value object
 */
export const DEFAULT_DIFFERENCES_VO: Differences = {
  numeric: "0.00",
  percentage: "0.00",
};
