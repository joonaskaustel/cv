import {Card, Image, Text, Badge, Button, Group, Title} from '@mantine/core';
import {ListComponent} from "./List";

export function EducationCard() {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>

      <Group position="apart" mt="md" mb="xs">
        <Title order={2}>Education</Title>
      </Group>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Bachelor's Degree
        </Text>
        <Badge color="gray" variant="light">
          2015 - 2018
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">Baltic Film, Media, Arts and Communication School (BFM)</Text>


      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Vocational Secondary Education</Text>
        <Badge color="gray" variant="light">
          2014 - 2016
        </Badge>
      </Group>
        <Text size="sm" color="dimmed">Tallinn Polytechnic School </Text>


      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Secondary Education  </Text>
        <Badge color="gray" variant="light">
          2001 - 2013
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">School 1</Text>

    </Card>
  );
}
