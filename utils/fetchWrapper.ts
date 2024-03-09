
type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  // Add more options as needed
};

export const fetchWrapper = async <T>(
  url: string,
  options?: RequestOptions
): Promise<Response> => {

  const token = localStorage.getItem('accessToken')
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  const config: RequestOptions = {
    ...options,
    headers: {
      ...options?.headers,
      ...headers,
    },
  };

  return await fetch(url, config);
};
