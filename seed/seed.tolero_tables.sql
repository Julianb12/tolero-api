BEGIN;

TRUNCATE
  posts
RESTART IDENTITY CASCADE;

INSERT INTO posts (id, content)
VALUES
  ('hello world'),
  ('testing');


COMMIT;
