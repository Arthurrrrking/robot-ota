// Performance optimization utilities for mobile devices

/**
 * Debounce function to limit the rate at which a function can fire
 * Useful for search inputs, resize events, etc.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function to ensure a function is called at most once per specified period
 * Useful for scroll events, touch moves, etc.
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if the device is mobile
 */
export function isMobileDevice(): boolean {
  return (
    typeof window !== 'undefined' &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
}

/**
 * Check if the device is in portrait orientation
 */
export function isPortraitOrientation(): boolean {
  return typeof window !== 'undefined' && window.innerHeight > window.innerWidth;
}

/**
 * Get current viewport width
 */
export function getViewportWidth(): number {
  return typeof window !== 'undefined' ? window.innerWidth : 0;
}

/**
 * Get current viewport height
 */
export function getViewportHeight(): number {
  return typeof window !== 'undefined' ? window.innerHeight : 0;
}