import {
  DEFAULT_NATGOLD_SNAPSHOT_VO,
  NatgoldSnapshot,
} from "vos/natgold-snapshot";

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
