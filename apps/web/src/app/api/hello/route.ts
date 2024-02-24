export async function GET() {
  const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      cache: 'no-store',
      next: {
        tags: [ 'todos' ],
      },
    });

    return response.json();
  };

  const todos = await getTodos() as { id: number; title: string; }[];

  return new Response(JSON.stringify(todos), {
    headers: { 'content-type': 'application/json' },
  });
}
