import {Card, Image, Text, Badge, Button, Group, Title} from '@mantine/core';
import {ListComponent} from "./List";

export function ExperienceCard() {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>

      <Group position="apart" mt="md" mb="xs">
        <Title order={2}>Experience</Title>
      </Group>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Company 3
        </Text>
        <Badge color="gray" variant="light">
          2022 -
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">Baltic Film, Media, Arts and Communication School (BFM)</Text>


      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Company 2</Text>
        <Badge color="gray" variant="light">
          2019 — 2022
        </Badge>
      </Group>
        <Text size="sm" color="dimmed">Tallinn Polytechnic School </Text>


      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Company 1</Text>
        <Badge color="gray" variant="light">
          2018 - 2019
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">School 1</Text>


      <Group position="apart" mt="md" mb="xs">
      <ListComponent/>
      </Group>

    </Card>
  );
}
