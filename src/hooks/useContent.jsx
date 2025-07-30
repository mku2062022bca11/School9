import { useState, useEffect } from 'react';

export const useContent = (fileName) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/src/content/${fileName}`);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error(`Error loading content from ${fileName}:`, error);
        setContent('Content loading error');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [fileName]);

  return { content, loading };
};