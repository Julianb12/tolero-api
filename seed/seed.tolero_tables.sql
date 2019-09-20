BEGIN;

TRUNCATE
  posts
RESTART IDENTITY CASCADE;

INSERT INTO posts (content)
VALUES
  ('◒ Lorem ipsum porro quisquam est qui dolorem. ◟4◞ ◓ ▲ 
  ◑ ipsum quia dolor sit amet, consectetur, adipisci velit. ◜2◝ ◐ #Lorem #Tolero');


COMMIT;
