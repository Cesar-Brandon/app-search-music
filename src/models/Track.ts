export interface IArtist {
  external_urls: {
    spotify: string;
  };
  followers?: {
    href: string;
    total: number;
  };
  genres?: string[];
  href: string;
  id: string;
  images?: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface IAlbum {
  album_type: string;
  artists: IArtist[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface ITrack {
  album: IAlbum;
  artists: IArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface ITrackState {
  tracks: ITrack[];
  selectedTrack: ITrack;
  artists: IArtist[];
  codeVerifier: string;
  accessToken: string;
  preview: HTMLAudioElement;
}
