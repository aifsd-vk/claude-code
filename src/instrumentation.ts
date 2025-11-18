// This file is automatically loaded by Next.js
// It sets up a simple localStorage polyfill for the server side

export async function register() {
  if (typeof window === 'undefined') {
    // Server-side localStorage polyfill
    const storage = new Map<string, string>();

    (global as any).localStorage = {
      getItem(key: string): string | null {
        return storage.get(key) ?? null;
      },
      setItem(key: string, value: string): void {
        storage.set(key, value);
      },
      removeItem(key: string): void {
        storage.delete(key);
      },
      clear(): void {
        storage.clear();
      },
      get length(): number {
        return storage.size;
      },
      key(index: number): string | null {
        return Array.from(storage.keys())[index] ?? null;
      },
    };
  }
}
