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

/**
 * A DTO containing multiple Natgold snapshots
 */
export interface ListNatgoldSnapshotsDto {
  data: Array<NatgoldSnapshot>;
}

/**
 * Provides default values for the ListNatgoldSnapshotsDto
 */
export const DEFAULT_LIST_NATGOLD_SNAPSHOTS_DTO: ListNatgoldSnapshotsDto = {
  data: [],
};

/**
 * A DTO containing a single NatgoldSnapshot
 */
export interface ShowNatgoldSnapshotDto {
  data: NatgoldSnapshot;
}

/**
 * Provides default values for the ShowNatgoldSnapshotDto
 */
export const DEFAULT_SHOW_NATGOLD_SNAPSHOT_DTO: ShowNatgoldSnapshotDto = {
  data: DEFAULT_NATGOLD_SNAPSHOT_VO,
};
