//Josia's Level, based upon Brendan's Level, based upon level1.js

const friction = 15.0;
const density = 5.0;

export function createLevel(world) {
    var groundFD = {density: density, friction: friction};

    world.createBody(Vec2(0,0)).createFixture(planck.Box(20.0, 0.25), groundFD);

    world.createBody().createFixture(planck.Edge(Vec2(0.0, -100.0), Vec2(0.0, 100.0)), groundFD);
    world.createBody().createFixture(planck.Edge(Vec2(-10.0, 0.0), Vec2(10.0, 0.0)), groundFD);
}