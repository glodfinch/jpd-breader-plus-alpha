interface ProgressBar {
  Line: new (
    element: string,
    options: {
      strokeWidth?: number;
      easing?: string;
      duration?: number;
      color?: string;
      trailColor?: string;
      trailWidth?: number;
      svgStyle?: { [key: string]: string };
      text?: { style: { [key: string]: string } };
      from?: { color: string };
      to?: { color: string };
      step?: (state: any, bar: any) => void;
    },
  ) => {
    animate: (progress: number) => void;
    destroy: () => void;
  };
}

interface Window {
  ProgressBar: ProgressBar;
}
